function bubbleSort(arr) {
    const n = arr.length;
    // Petla po wszystkich elementach
    for(let i = 0; i < n - 1; i++) {
        // Ostatnie i elementów jest juz na miejscu
        for(let j = 0; j < n - i - 1; j++) {
            // Porównaj sasiednie elementy
            if(arr[j] > arr[j + 1]) {
                // Zamien jesli zla kolejnosc
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }        
        } 
    } 
}