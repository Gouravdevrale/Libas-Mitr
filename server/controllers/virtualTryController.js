import Replicate from "replicate";
import User from "../models/userModel.js";


const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});


export const virtualTry = async (req, res) => {

    try {
        const { person_url, cloth_url, garment_des } = req.body

        if (!person_url || !cloth_url || !garment_des) {
            res.status(409)
            throw new Error("Please Enter All Details!")
        }

        // Check if user have credits
        let user = await User.findById(req.user._id)

        if (user.credits <= 0 || !user.credits) {
            res.status(409)
            throw new Error("Not Enough Credits")
        } else {
            const input = {
                garm_img: cloth_url,
                human_img: person_url,
                garment_des: garment_des
            };

            const output = await replicate.run(
                "cuuupid/idm-vton:0513734a452173b8173e907e3a59d19a36266e55b48528559432bd21c7d7e985",
                { input }
            );

            // // Substract Credits
            await User.findByIdAndUpdate(user._id, { credits: user.credits - 1 }, { new: true })
            // console.log(user.credits);
            

            res.json({
                success: true,
                credits: user.credits,
                output_url: output.url()
            })

        }
        // res.send("credites cut")

    } catch (error) {
        res.status(409)
        throw new Error("Currently Virtual Try Is Not Available")
    }


}