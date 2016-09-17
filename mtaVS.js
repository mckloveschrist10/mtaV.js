public class Stamfordbus
{

int[] array;

public StamfordBus()
{
array = {311,312,313,321,324,326,327,328,331,333,334,335,336,341,342,344,345,351,971};
}

public int find(int num)
{

 int lo =1;
 int hi=array.lenght;
 int mid = 0;
 
 while(lo<=hi)
 {
    mid = lo +(hi - lo)/2;
    
    if(array[mid]==num)
      return num;
      
    if(array[mid] < num)
      lo = mid + 1;
      
    if(array[mid] > num)
      hi = mid - 1;
    }
  return -1; //-1 means, the number has not been found
}
