// ----- apiSimulator ----- //

// --- Import errors --- //
import { NetworkError, DataError } from "./errors.ts";

/**
 * 1. Fetching Product Catalog
 * --- Simulates getting a list of product from database.
 * - Succes: Returns a list of items (Laptop, Headphones) after 1 second.
 * - Failure: Ramdonly fails 10% of the time.
 */

export const fecthProductCatalog = (): Promise<{ id: number; name: string; price: number } []> => {
    return new Promise((resolve, reject) => {
        console.log("Simulating: Fetching product catalog...");

        setTimeout(() => {
            // --- Math.ramdon() gives a number between 0 to 1
            // --- If it is less than 0.9 (90% chance), it succeed.
            const randomValue = Math.random();
            if (randomValue < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                    { id: 3, name: "Keyboard", price: 100 },
                ]);
            } else if (randomValue < 0.9) {
                // --- 10% chance of network error
                reject(new NetworkError("Failed to connect to Product Catalog Server."));
            } else {
                // --- 10% chance od Data Error
                reject(new DataError("Product Catalog data is corrupt."))
            }
        }, 1000); // --- 1000 milliseconds = 1 second delay
    });
};

/**
 * 2. Fetch Product Reviews
 * --- Simulates getting reviews for a specific product.
 * - Input: Product (number)
 * - Success: Returns a list of views after 1.5 seconds
 * - Faulure: Ramdonly fails 10% of the time
 */

export const fetchProductReviews = (productId: number): Promise<{ productId: number; review: string } []> => {
    return new Promise((resolve, reject) => {
        console.log(`Simulating: Fetching reviews for product ID ${productId}...`);

        setTimeout(() => {
            const randomValue = Math.random();
            if (randomValue < 0.9) {
                resolve([
                    { productId: productId, review: "Great product!" },
                    { productId: productId, review: "Good value for the money." },
                ]);
            } else {
                reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500); // --- 1.5 seconds delay
    });
};

/**
 * 3. Fetch Sales Report
 * --- Simulates getting a summary of all sales
 * - Success: Return sales stats after 1 second
 * - Failure: Ramdonly fails 10% of the time
 */

export const fetchSalesReport = (): Promise<{ totalSales: number; unitSold: number; averagePrice: number }> => {
    return new Promise((resolve, reject) => {
        console.log(`"Simulating: Fetching sales report..."`);

        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve({
                    totalSales: 50000,
                    unitSold: 150,
                    averagePrice: 333,
                });
            } else {
                reject(new DataError("Failed to fetch sales report"));
            }
        }, 1000); // --- 1 second delay
    });
};