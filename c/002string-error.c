#include <stdio.h>
int main(){
  //Warning
  char pc[] = "hello";
  *pc = "H";//*pc = (char) "H"; can work
  printf("(%s)\n", pc );
}
