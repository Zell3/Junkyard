// Workshop #4
// ให้นิสิตเขียนโปรแกรมเพื่อรับค่าจากผู้ใช้ผ่านเว็บเบราว์เซอร์โดยจะรับเป็นตัวเลข และส่งผลรับออกมาเป็น ผลรวมของตัวเลขในแต่ละหลัก
// เช่น
// Input 1234
// Output 10
// เกิดจาก 1 + 2 + 3 + 4 ได้เป็น 10

const http = require('http');
const port = 3000;

// sum digits
function sum_of_digits(number) {
    const digits = number.split('').map(Number);
    const sum = digits.reduce((prev, curr) => prev + curr, 0);
    const process = digits.join(' + ');
    return { sum, process };
}

// create server    
const server = http.createServer(function (request, response) {
    if (request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(`<form method="post" action="/">
        Enter numbers: <input type="text" name="number">
        <br>
        <input type="submit">
        </form>
        </body></html>`);
        response.end();
    } else if (request.method === 'POST') {
        let body = '';

        // collect data
        request.on('data', chunk => {
            body += chunk.toString();
        });

        // when all data is collected
        request.on('end', () => {
            // parse form data
            const parsedBody = new URLSearchParams(body);
            const number = parsedBody.get('number');
            const { sum, process } = sum_of_digits(number);

            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('<html><head><meta charset="UTF-8"></head><body>');
            response.write('<form method="post" action="/">');
            response.write(`Enter numbers: <input type="text" name="number" value="${number}"><br>`);
            response.write('<input type="submit">');
            response.write('</form>');
            response.write(`<p>Input: ${number}</p>`);
            response.write(`<p>Output: ${sum}</p>`);
            response.write(`<p>เกิดจาก ${process} ได้ ${sum}</p>`);            
            response.write('</body></html>');
            response.end();
        });
    }
});

// connect server port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
