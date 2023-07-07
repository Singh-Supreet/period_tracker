const calculateBtn = document.getElementById('calculate-btn');
const startDateInput = document.getElementById('start-date');
const cycleLengthInput = document.getElementById('cycle-length');
const periodLengthInput = document.getElementById('period-length');
const resultsDiv = document.getElementById('results');

calculateBtn.addEventListener('click', () => {
  const startDate = new Date(startDateInput.value);
  const cycleLength = Number(cycleLengthInput.value);
  const periodLength = Number(periodLengthInput.value);

  if (startDate && cycleLength && periodLength) {
    const nextPeriodStartDate = new Date(startDate.getTime() + cycleLength * 24 * 60 * 60 * 1000);
    const ovulationDate = new Date(nextPeriodStartDate.getTime() - 14 * 24 * 60 * 60 * 1000);
    const fertileStartDate = new Date(ovulationDate.getTime() - 5 * 24 * 60 * 60 * 1000);
    const fertileEndDate = new Date(ovulationDate.getTime() + 4 * 24 * 60 * 60 * 1000);
    const pregnancytestday = new Date(nextPeriodStartDate.getTime() + 1 * 24 * 60 * 60 * 1000);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    // Create the result HTML
    let html = `
      <p>Next period start date: ${nextPeriodStartDate.toLocaleDateString(undefined, options)}</p>
      <p>Ovulation date: ${ovulationDate.toLocaleDateString(undefined, options)}</p>
      <p>Fertile window: ${fertileStartDate.toLocaleDateString(undefined, options)} - ${fertileEndDate.toLocaleDateString(undefined, options)}</p>
      <p>Pregnancy Test Date: ${pregnancytestday.toLocaleDateString(undefined, options)}</p>
    `;

    // Show the results
    resultsDiv.innerHTML = html;
  }
});

// Update the result HTML when the inputs are changed
startDateInput.addEventListener('change', () => calculateBtn.click());
cycleLengthInput.addEventListener('change', () => calculateBtn.click());
periodLengthInput.addEventListener('change', () => calculateBtn.click());
