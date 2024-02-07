const fs = require('fs');

const careGivers = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/find-caregivers.json`)
)

exports.checkId = (req, res, next, val) => {
    console.log(`Id is ${val}`);
    if (req.params.id * 1 > careGivers.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid Id'
        })
    };
    next();
}

exports.getAllCareGivers = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: careGivers.length,
        data: {
            careGivers,
        },
    })
}

exports.addCaregiver = (req, res) => {
    console.log(req.body);

    const newId = careGivers[careGivers.length - 1]._id + 1;
    const newCareGiver = Object.assign({id : newId}, req.body);

    careGivers.push(newCareGiver)

    fs.writeFile(`${__dirname}/../data/find-caregivers.json`,
    JSON.stringify(careGivers),
    (err) => {
        res.status(201).json({
            status: 'success',
            data: {
                careGivers: newCareGiver
            }
        })
    })
}

exports.updateCareGiver = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const careGiver = careGivers.find((el) => el._id === id);
    
    res.status(200).json({
        status: 'success',
        data: {
            careGiver: careGiver
        }
    })
}
