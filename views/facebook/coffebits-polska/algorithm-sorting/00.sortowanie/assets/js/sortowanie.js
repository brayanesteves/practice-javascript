function insertionSort(arr) {
    const n = arr.length;
    // Iteruj od druglego elementu
    for(let i = 1; i < n; i++) {
        // Element do wstawienia
        let current = arr[i];
        let j = i - 1;

        // Przesun wieksze elementy
        while(j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Wstaw element we wlasciwe miejsce
        arr[j + 1] = current;
    } 
}