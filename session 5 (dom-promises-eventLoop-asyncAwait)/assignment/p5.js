// Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
// After the delay, log "Download complete: [url]" and execute the callback function.

function downloadFile(url, callback) {
    setTimeout(() => {
        callback();
        console.log('Download complete.');
    }, 2000);
}

function callback() {
    console.log('Callback executed.');
}

const url = 'https://example.com';
downloadFile(url, callback);