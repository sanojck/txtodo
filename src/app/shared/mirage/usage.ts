import startMockServer from "./Mocker";

export const startMockingIfConfigured = () => {
    if (process.env.REACT_APP_APIMOCKED) {
        console.log('API Mocking enabled');
        startMockServer();
    }
}