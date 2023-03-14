import images from "./images"

const data = {
    user: {
        name: 'Admin',
        img: images.avt
    },
    summary: [
        {
            title: 'Employees',
            subtitle: 'Techinical & Non-Technical',
            value: '500',
            percent: 70
        },
        {
            title: 'Complaints',
            subtitle: 'Total complaints today',
            value: '10',
            percent: 20
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: '10000',
            percent: 45
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '10K',
            title: 'Complaints'
        },
        {
            value: '1000',
            title: 'Employees'
        },
        {
            value: '15L',
            title: 'Inventory Products'
        },
        {
            value: '5c-8c',
            title: 'Revenue'
        }
    ],
    ComplaintsByChannel: [
        {
            title: 'Domestic Complaints',
            value: 70
        },
        {
            title: 'Corporate complaints',
            value: 30
        },
        {
            title: 'Referal complaints by both',
            value: 60
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data