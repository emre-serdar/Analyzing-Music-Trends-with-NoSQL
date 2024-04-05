const mean = (arr) => {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
};

const calculateCorrelation = (attributeValues, metricValues) => {
    // Check if the arrays have different lengths or are empty
    if (attributeValues.length !== metricValues.length || attributeValues.length === 0) {
        throw new Error('Arrays are of different lengths or empty');
    }

    const meanAttribute = mean(attributeValues);
    const meanMetric = mean(metricValues);

    let numerator = 0, denominator1 = 0, denominator2 = 0;
    for (let i = 0; i < attributeValues.length; i++) {
        numerator += (attributeValues[i] - meanAttribute) * (metricValues[i] - meanMetric);
        denominator1 += Math.pow((attributeValues[i] - meanAttribute), 2);
        denominator2 += Math.pow((metricValues[i] - meanMetric), 2);
    }

    if (denominator1 === 0 || denominator2 === 0) {
        throw new Error('Division by zero in correlation calculation');
    }

    return numerator / Math.sqrt(denominator1 * denominator2);
};

module.exports = calculateCorrelation;
