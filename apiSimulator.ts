// ----- apiSimulator ----- //

/**
 * 1. Fetching Product Catalog
 * Simulates getting a list of product from database.
 * - Succes: Returns a list of items (Laptop, Headphones) after 1 second.
 * - Failure: Ramdonly fails 10% of the time.
 */

export const fecthProductCatalog = (): Promise<{ id: number; name: string; price: number } []> => {
    return new Promise((resolve, reject) => {
        console.log("Simulating: Fetching product catalog...");

        setTimeout(() => {
            // --- Math.ramdon() gives a number between 0 to 1
            // --- If it is less than 0.9 (90% chance), it succeed.
            if (Math.random() < 0.9) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                    { id: 3, name: "Keyboard", price: 100 },
                ]);
            } else {
                // --- 10% chance to fail
                reject("Failes to fetch product catalog");
            }
        }, 1000); // --- 1000 milliseconds = 1 second delay
    });
};

/**
 * 2. Fetch Product Reviews
 */