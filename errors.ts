// ----- errors.ts ----- //

// --- 1. Error when network fails

export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
};

// --- 2. Error for data issues

export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
};