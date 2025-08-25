// Test the date parsing logic
function getCalendarWeek(dateString) {
    if (!dateString || !dateString.includes(' - ')) {
        console.log(`ERROR: Invalid format - ${dateString}`);
        return null;
    }
    
    const [dayPart, datePart] = dateString.split(' - ');
    console.log(`Split: dayPart="${dayPart}", datePart="${datePart}"`);
    
    // Parse the date for 2025
    const year = 2025;
    let month, day;
    
    // Extract month and day from date part (e.g. "September 3")
    const monthNames = {
        'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    
    const dateWords = datePart.split(' ');
    console.log(`dateWords: [${dateWords.join(', ')}]`);
    
    if (dateWords.length >= 2) {
        month = monthNames[dateWords[0]];
        day = parseInt(dateWords[1]);
        console.log(`Parsed: month=${month}, day=${day}`);
        
        if (month !== undefined && !isNaN(day)) {
            const date = new Date(year, month, day);
            console.log(`Created date: ${date.toString()}`);
            
            // Semester starts September 3, 2025 (Wednesday)
            // Week 1 starts on the Sunday before: August 31, 2025
            const firstSunday = new Date(2025, 7, 31); // August 31, 2025 (Sunday)
            console.log(`First Sunday: ${firstSunday.toString()}`);
            
            // Find the Sunday of the current date's week
            const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
            const startOfWeek = new Date(date);
            startOfWeek.setDate(date.getDate() - dayOfWeek);
            console.log(`Day of week: ${dayOfWeek}, Start of week: ${startOfWeek.toString()}`);
            
            // Calculate week number based on first Sunday of semester
            const weeksDiff = Math.floor((startOfWeek - firstSunday) / (7 * 24 * 60 * 60 * 1000));
            const calculatedWeek = Math.max(1, weeksDiff + 1);
            console.log(`Weeks diff: ${weeksDiff}, Calculated week: ${calculatedWeek}`);
            
            return calculatedWeek;
        }
    }
    
    console.log(`ERROR: Could not parse`);
    return null;
}

// Test our problematic dates
const testDates = [
    "F - September 19",
    "T - September 23"
];

console.log("=== Date Parsing Test ===");
testDates.forEach(dateString => {
    console.log(`\nTesting: ${dateString}`);
    const result = getCalendarWeek(dateString);
    console.log(`Result: Week ${result}\n${'='.repeat(50)}`);
});
