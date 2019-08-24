describe("FileServer", function () {
    let Server = require('../server');
    const real_file = '/index.html';
    const fake_file = 'FAKE_FILE_NAME';
    it("Should return a file when asked for one that exists", function () {
        let file = "";
        Server.getFile(real_file).then(f => {
                expect(f).not.toBeNull("no return file received");
            }
        )
    });
    //expect a rejection from the promise
    it("Should return an error when the file isn't found", async function () {
        try {
            await Server.getFile(fake_file);
        } catch (err) {
            return;
        }
        throw new Error('Promise should have returned error');
    })
});