#include <stdio.h>
#include <string.h>
void reverse (char *s, int l){
        int i;
        char t;
        for (i=l-1; i > (int)(l-1)/2;i--){
          t = *(s+i);
          *(s+i) = *(s+(l-1-i));
          *(s+(l-1-i)) = t;
        }
}
int main (){
        while(1) {
                char input[20];
                gets(input);
                reverse(input, strlen(input));
                printf("(%s), %d\n", input, strlen(input));

        }
}
