#include <stdio.h>

/* Function to take matrix input */
void inputMatrix(int mat[10][10], int r, int c) {
    int i, j;
    for (i = 0; i < r; i++) {
        for (j = 0; j < c; j++) {
            printf("Enter element [%d][%d] : ", i, j);
            scanf(" %d", &mat[i][j]);
        }
    }
}

/* Function to display matrix */
void displayMatrix(int mat[10][10], int r, int c) {
    int i, j;
    for (i = 0; i < r; i++) {
        for (j = 0; j < c; j++) {
            printf("%d\t", mat[i][j]);
        }
        printf("\n");
    }
}

/* Function to multiply matrices */
void multiplyMatrix(int a[10][10], int b[10][10], int res[10][10],
                    int r1, int c1, int c2) {
    int i, j, k;

    for (i = 0; i < r1; i++) {
        for (j = 0; j < c2; j++) {
            res[i][j] = 0;
            for (k = 0; k < c1; k++) {
                res[i][j] = res[i][j] + (a[i][k] * b[k][j]);
            }
        }
    }
}

int main() {
    int mat1[10][10], mat2[10][10], result[10][10];
    int r1, c1, r2, c2;

    printf("===== MATRIX MULTIPLICATION =====\n\n");

    /* Input size of matrices */
    printf("Enter rows and columns of Matrix 1 : ");
    scanf(" %d %d", &r1, &c1);

    printf("Enter rows and columns of Matrix 2 : ");
    scanf(" %d %d", &r2, &c2);

    /* Condition check */
    if (c1 != r2) {
        printf("\nMatrix multiplication not possible!\n");
        printf("Columns of Matrix 1 must equal rows of Matrix 2.\n");
        return 0;
    }

    /* Input matrices */
    printf("\nEnter elements of Matrix 1:\n");
    inputMatrix(mat1, r1, c1);

    printf("\nEnter elements of Matrix 2:\n");
    inputMatrix(mat2, r2, c2);

    /* Display matrices */
    printf("\nMatrix 1:\n");
    displayMatrix(mat1, r1, c1);

    printf("\nMatrix 2:\n");
    displayMatrix(mat2, r2, c2);

    /* Multiply matrices */
    multiplyMatrix(mat1, mat2, result, r1, c1, c2);

    /* Display result */
    printf("\nFinal Matrix after Multiplication:\n");
    displayMatrix(result, r1, c2);

    return 0;
}

