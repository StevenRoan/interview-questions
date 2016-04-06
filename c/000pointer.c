#include <stdio.h>
#include <string.h>

int main (int argc, char *argv[]){
        char str[]="HE";
        char *p=str;
        int n=10;
        //3, 8, 4
        printf("sizeof(str): %d, sizeof(p): %d, sizeof(n): %d\n", sizeof(str), sizeof(p), sizeof(n));
        printf("strlen(str): %d\n", strlen(str));


        //------- ptr manipulation
        int a[]={6,7,8,9,10};
        int *p2=a;
        *(p2++)+=123;//a[0] = 129;
        *(++p2)+=123;//a[2] = 131;

        int arrayLen = NULL;
        if (sizeof(a) > 0) {
          arrayLen = sizeof(a)/sizeof(a[0]);
          for(int i = 0; i < arrayLen; i++) {
            printf("%d, ", a[i]);
          }
          printf("\n");
        }

        return 1;
}
