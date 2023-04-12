export default function handler(req, res){
    const body = req.body
    console.log('body: ', body)

    if(!body.name || !body.email || !body.subject || !body.message){
        return res.status(400).json({ data: 'name email not found'})
    }

    res.status(200).json({data: `${body.name} ${body.email} ${body.subject} ${body.message}`})
}