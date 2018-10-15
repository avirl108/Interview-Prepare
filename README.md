package visa;

import java.util.*;    

public class Example1 {    
    
    public static void sort(int[][] ob, final int[] order) {    
        Arrays.sort(ob, new Comparator<Object>() {    
            public int compare(Object o1, Object o2) {    
                int[] one = (int[]) o1;    
                int[] two = (int[]) o2;  
                //single length of the order
                for (int i = 0; i < order.length; i++) {
                //for (int i = order.length - 1; i >= 0; i--) {
                    //int k = order[i];
                	int k = 0;
                    System.out.println(" order[i] = " + order[i]);
                    System.out.println(" k = " + k);
                    System.out.println(" one[k] = " + one[k]);
                    System.out.println(" two[k] = " + two[k]);
                    System.out.println("  ");
                    if (one[k] > two[k]) {    
                        return 1;    
                    } else if (one[k] < two[k]) {    
                        return -1;    
                    } else {    
                        continue;  //如果按一条件比较结果相等，就使用第二个条件进行比较。  
                    }    
                }    
                return 0;    
            }    
        });   
    }    
    
    public static void main(String[] args) {    
        int array[][] = new int[][] {     
//                { 20, 10, 2052 },     
//                { 06, 6, 1953 },     
//                { 26, 5, 1960 },     
//                { 20, 9, 1958 },    
//                { 16, 3, 2068 },     
//                { 25, 05, 1912 },     
//                { 16, 12, 2018 }
        	{ 2052, 10, 20 },     
            { 1933, 06, 06 },     
            { 1960, 5, 26 },     
            { 1958, 9, 20 },    
            { 2068, 3, 16 },     
            { 1912, 05, 25 },     
            { 2018, 12, 16 },
            { 2061, 12, 26 },
            { 2030, 11, 04 },
            { 1963, 07, 28},
            {1933, 06, 07}
        };    
        sort(array, new int[] {0});   //先根据第一列比较，若相同则再比较第二列
        for (int i = 0; i < array.length; i++) {    
            //for (int j = 0; j < array[i].length; j++) { 
        	for (int j = array[i].length - 1; j >= 0 ; j--) { 
                System.out.print(array[i][j]);    
                System.out.print("\t");    
            }    
            System.out.println();    
        }    
    }    
}
