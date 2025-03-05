const age = 1;
const start = 18;
const end = 30;

if (age < start || age > end) {
    console.log(`Value ${age} does NOT belong to the segment [${start} ${end}]`);
}

if (!(age >= start && age <= end)) {
    console.log(`Value ${age} does NOT belong to the segment [${start} ${end}]`);
}
