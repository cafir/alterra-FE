const  listDownload = [
    {
        file: 'RAM 8GB',
        size: 32
    },
    {
        file: 'Bitcoin',
        size: 51
    },
    {
        file: 'Picture',
        size: 15
    }
];

function downloadFile(arr) {
    for (let i in arr) {
        setTimeout(() => {
            console.log(`${arr[i].file} has been download ${arr[i].size/10}`)
        }, arr[i].size*100)
    }
}

downloadFile(listDownload);