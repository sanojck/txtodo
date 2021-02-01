
export function setAuthToken(token: string) {
    sessionStorage.setItem('authtoken', token);
}

export function setAuthName(name: string) {
    sessionStorage.setItem('authname', name);
}

export function setAuthImage(imageUrl: string) {
    sessionStorage.setItem('authimage', imageUrl);
}

function getAuthToken(): string | null {
    return sessionStorage.getItem('authtoken');
}

export function getAuthName(): string | null {
    return sessionStorage.getItem('authname');
}

export function getAuthImage(): string | null {
    return sessionStorage.getItem('authimage');
}

export function amendAuthToken(requestOptions?: any): any {
    if (requestOptions) {
        if (requestOptions.headers) {
            requestOptions.headers.Authorization = 'Bearer ' + getAuthToken();
            return requestOptions;
        } else {
            requestOptions.headers = {
                // 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getAuthToken(),
            }
            return requestOptions;
        }
    } else {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getAuthToken(),
            }
        };
        return requestOptions;
    }
}


export function isLoggedIn(): boolean {
    const authToken = getAuthToken();
    if (!authToken) {
        return false;
    } else {
        return true;
    }
}

export function sessionClear() {
    sessionStorage.clear();
}