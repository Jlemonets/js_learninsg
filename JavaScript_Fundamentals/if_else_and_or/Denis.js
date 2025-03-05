const age = 10;
const start = 20;
const end = 50;

if (age < start || age > end) {
    console.log(`Value ${age} does NOT belong to the segment [${start} ${end}]`);
}

if (!(age >= start && age <= end)) {
    console.log(`Value ${age} does NOT belong to the segment [${start} ${end}]`);
}
