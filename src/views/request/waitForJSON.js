/** @function waitForJSON Fetching JSON */
export async function waitForJSON() {
    const response = await fetch('https://raw.githubusercontent.com/andyklimczak/TheReportOfTheWeek-API/master/seeds/reports.json');
    return await response.json();
}    