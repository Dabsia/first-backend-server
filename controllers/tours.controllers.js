
const tours = [
    {
        id: 1,
        name: 'Fun place',
        price: 240
    },
    {
        id: 2,
        name: 'bitter place',
        price: 400
    }
]

exports.checkId = (req, res, next, val) => {
    const { id } = req.params
    if (id * 1 > tours.length) {
        return res.status(404).json({
            status: 'failed',
            data: `invalid ID`

        })
    }
    next()
}

// Get All tours
exports.getAllTours = (req, res) => {
    res.status(200).json({ status: 'success', data: { tours } })
}

// Create new Tour
exports.createNewTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1
    const createdAt = new Date()
    const newTour = Object.assign({ id: newId, createdAt }, req.body)


    tours.push(newTour)

    res.status(201).json({
        status: 'success',
        data: {
            tour: newTour
        }
    })
}

// Get single Tour
exports.getTour = (req, res) => {
    const id = req.params.id * 1
    const tour = tours.find(el => el.id === id)



    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
}

// update Tour
exports.updateTour = (req, res) => {

    res.status(200).json({
        status: 'success',
        data: {
            tour: 'updated'
        }
    })
}

// Delete tour
exports.deleteTour = (req, res) => {

    res.status(204).json({
        status: 'success',
        data: null
    })
}

