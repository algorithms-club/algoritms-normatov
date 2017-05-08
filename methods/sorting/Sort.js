'use strict';

class Sorting {

    static mergeSort(collection) {
        let arraySize = collection.length;
        if (arraySize < 2) return collection;
        else {
            let tempFirstArray = collection.slice(0, Math.floor(arraySize / 2));
            let tempSecondArray = collection.slice(Math.floor(arraySize / 2));
            collection = Sorting.merge(Sorting.mergeSort(tempFirstArray), Sorting.mergeSort(tempSecondArray));
        }
        return collection;
    }

    static merge(collectionOne, collectionTwo) {
        let resultCollection = [];
        let collectionOneSize = collectionOne.length;
        let collectionTwoSize = collectionTwo.length;
        let resultArraySize = collectionOneSize + collectionTwoSize;
        let collectionOneIndex = 0;
        let collectionTwoIndex = 0;
        while (resultArraySize) {
            if (collectionOneSize - 1 < collectionOneIndex) {
                resultCollection.push(collectionTwo[collectionTwoIndex]);
                collectionTwoIndex++;
                resultArraySize--;
                continue;
            }
            if (collectionTwoSize - 1 < collectionTwoIndex) {
                resultCollection.push(collectionOne[collectionOneIndex]);
                collectionOneIndex++;
                resultArraySize--;
                continue;
            }
            if (collectionOne[collectionOneIndex] < collectionTwo[collectionTwoIndex]) {
                resultCollection.push(collectionOne[collectionOneIndex]);
                collectionOneIndex++;
            }
            else {
                resultCollection.push(collectionTwo[collectionTwoIndex]);
                collectionTwoIndex++;
            }
            resultArraySize--;
        }
        return resultCollection;
    }

    static quickSort(collection) {
        let tempArrayBeforePivot = [];
        let tempArrayAfterPivot = [];
        let arraySize = collection.length;
        if (arraySize < 2) return collection;
        if (arraySize == 2) {
            if (collection[0] > collection[1]) {
                let temp = collection[0];
                collection[0] = collection[1];
                collection[1] = temp;
            }
        }
        else {
            let pivotIndex = Math.floor(Math.random() * (arraySize - 2)) + 1;
            for (let i = 0; i < arraySize; i++) {
                if (i != pivotIndex) {
                    if (collection[i] < collection[pivotIndex]) {
                        tempArrayBeforePivot.push(collection[i]);
                    }
                    else tempArrayAfterPivot.push(collection[i]);
                }
            }
            tempArrayBeforePivot = Sorting.quickSort(tempArrayBeforePivot);
            tempArrayAfterPivot = Sorting.quickSort(tempArrayAfterPivot);
            tempArrayBeforePivot.push(collection[pivotIndex]);
            collection = (tempArrayBeforePivot).concat(tempArrayAfterPivot);
        }
        return collection;
    }

    static insertionSort(collection) {
        let arraySize = collection.length;
        let valueMinElement;
        for (let i = 1; i < arraySize; i++) {
            for (let j = i - 1; j >= 0; j--) {
                if (collection[j] > collection[j + 1]) {
                    valueMinElement = collection[j];
                    collection[j] = collection[j + 1];
                    collection[j + 1] = valueMinElement;
                }
                else break;
            }
        }
        return collection;
    }

    static shellSort(collection) {
        let arraySize = collection.length;
        let gapArray = [];
        let elementInGap = 0;
        let x = 0;
        let valueMinElement;
        while (elementInGap < arraySize) {
            elementInGap = 3 * x + 1;
            gapArray.push(elementInGap);
            x++;
        }
        gapArray.pop();
        do {
            elementInGap = gapArray.pop();
            for (let i = elementInGap; i < arraySize; i += elementInGap) {
                for (let j = i - 1; j >= 0; j--) {
                    if (collection[j] > collection[j + 1]) {
                        valueMinElement = collection[j];
                        collection[j] = collection[j + 1];
                        collection[j + 1] = valueMinElement;
                    }
                    else break;
                }
            }
        } while (elementInGap);
        return collection;
    }

    static selectionSort(collection) {
        let arraySize = collection.length;
        for (let i = 0; i < arraySize; i++) {
            let minElement = collection[i];
            let indexOfMinElement = i;
            for (let j = i; j < arraySize; j++) {
                if (minElement > collection[j]) {
                    minElement = collection[j];
                    indexOfMinElement = j;
                }
            }
            collection[indexOfMinElement] = collection[i];
            collection[i] = minElement;
        }
        return collection;
    }

    static everythingSort(collection, compare) {
        let arraySize = collection.length;
        let valueMinElement;
        for (let i = 1; i < arraySize; i++) {
            for (let j = i - 1; j >= 0; j--) {
                if (compare(collection[j], collection[j + 1])) {
                    valueMinElement = collection[j];
                    collection[j] = collection[j + 1];
                    collection[j + 1] = valueMinElement;
                }
                else break;
            }
        }
        return collection;
    }

    static compareNumbers(a, b) {
        return a > b;
    }

    static compareLetters(a, b) {
        return a > b;
    }

    static shuffle(collection) {
        let arraySize = collection.length;
        if (isNaN(arraySize)) return collection;
        let shift = Math.floor(Math.random() * (arraySize - 1)) + 1;
        for (let i = shift; i < arraySize; i += shift) {
            let temp = collection[i - 1];
            collection[i - 1] = collection[i];
            collection[i] = temp;
        }
        console.log(collection);
        return collection;
    }

    static  isSorted(collection, compare) {
        let arraySize = collection.length;
        if (isNaN(arraySize)) return true;
        for (let i = 1; i < arraySize; i++) {
            if (compare(collection[i - 1], collection[i])) return false;
        }
        return true;
    }
}
module.exports = Sorting;