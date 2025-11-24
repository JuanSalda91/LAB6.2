// ----- index.ts ----- //

// --- 1. Import the functions created in apiSimulator --- //
import { fecthProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.ts";

console.log("---Starting Shop Dashboard ---\n")

// --- 2. Promise chain --- //

fecthProductCatalog()
    .then((products) => {
        console.log("Success: Product Catalog Fetched");
        console.table(products) // - To print array as table

            // --- 3. Reviews for each product using PromiseAll()
    const reviewPromises = products.map((product) => 
    fetchProductReviews(product.id));

    return Promise.all(reviewPromises);
    })
    .then((reviews) => {
        console.log("\n Success: Product Reviews Fetched");
        console.log(reviews.flat()); // - make array readable.

        // --- 4. Get sales report
        return fetchSalesReport();
    })
    .then((fetchSalesReport) => {
        console.log("\n Success: Sales report Fetched");
        console.log(`Total Sales: $${fetchSalesReport.totalSales}`);
        console.log(`Units Sold: ${fetchSalesReport.unitSold}`);
    })
    .catch((error) => {
        // --- 5. if any step fails, error shows
        console.error("\n Error Ocurred:");
        console.error(error);
    })
    .finally(() => {
        // --- 6. This always runs
        console.log("\n--- Dashboard operations Complete ---");
    });