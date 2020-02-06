const mocks = {
  auth: { POST: { token: "This-is-a-mocked-token" } },
  "user": { POST: { name: "Константин Церковный", title: "Дизайнер всия Руси", displayMode: 'light' } },
  "phone_pass" : { POST: { status: 'success' }}
};

const apiCall = ({ url, method }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(mocks[url][method || "GET"]);
        console.log(`Отправлено: '${url}' - ${method || "GET"}`);
        console.log("Ответ: ", mocks[url][method || "GET"]);
      } catch (err) {
        reject(new Error(err));
      }
    }, 100);
  });
export default apiCall;

