#include <stdio.h>
#include <string.h>

int strcmp2(char* source, char* dest) {
    if (strlen(source) != strlen(dest)) {
      return -1;
    } else if (strlen(source) == 0) {
      return 0;
    }
    for (int i=0; i < strlen(source); i++, source++, dest++) {
      if(*source != *dest) {
        return -1;
      }
    }
    return 0;
}
int main() {
  printf("strcmp2('steven', 'steven') = %d\n", strcmp2("steven", "steven"));
  printf("strcmp2('', '')=%d\n", strcmp2("", ""));
  printf("strcmp('', '')=%d\n", strcmp("", ""));
  printf("strcmp2('steven', 'steven2')=%d\n", strcmp2("steven", "steven2"));
  return 1;
}
