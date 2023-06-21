const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const apply = async(req,res) =>{
    try{
        const userId = req.user.userId;
    
        const { useDate, whereSick, howSick} = req.body;
    
        const apply = await prisma.patientapply.create({
            data:{
                serviceTime : useDate,
                whereInfo : whereSick,
                HowInfo : howSick,
                user : { connect : {userId}}
            }
        })

        return res.status(200).json({
            message : "환자추가 성공"
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message : "환자추가 실패"
        })
    }
    

}
module.exports = apply;