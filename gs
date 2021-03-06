【valid parenthesis】
class Solution {
    public boolean isValid(String s) {
        //corner case
        if (s == null) {
            return true;
        }
        Stack<Character> stack = new Stack<Character>();
        //push into stack
        for (char c : s.toCharArray()) {
            //left cases 
            if (c == '(') {
                stack.push(')');
            }else if (c == '[') {
                stack.push(']');
            }else if (c == '{') {
                stack.push('}');
            }else if (stack.isEmpty() || stack.pop() != c) {
                //right case
                return false;
            }
        }
        return stack.isEmpty();
    }
}

【invert binary tree】
class TreeNode {  
int val;  TreeNode left, right;    //parameter is another item  
TreeNode(int item) {    val = item;    left = right = null;  }}
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) {
            return null;
        }
        TreeNode temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);
        return root;
    }
}

【给两个String，找相同的字符】就是双重for循环
public static void main(String[] args) {



	String str1 = "刘烨,孙坚,王二小,蜘蛛侠,钢铁侠,毛剑卿";
	String str2 = "王二小,李占军,刘胡兰,毛剑卿";




	String[] arr1 = str1.split(",") ;
	String[] arr2 = str2.split(",") ; 
	StringBuffer sb = new StringBuffer();
	for (int i = 0; i < arr2.length; i++){
	   for (int j = 0; j < arr1.length; j++){
	      if (arr1[j].equals(arr2[i])){
	          sb.append(arr1[j] + ",") ;
	          }
	    }
	 }
	        System.out.println("结果：" + sb.toString().substring(0, sb.toString().length() - 1));
	       
}
【reverse vowels】典型双指针了
class Solution {
    public String reverseVowels(String s) {
        //cc
        if (s == null) {
            return s;
        }
        //ini
        String vowels = "aeiouAEIOU";
        char[] chars = s.toCharArray();
        int start = 0, end = s.length() - 1;
        
        while (start < end) {
            //adjust start, end
            while (start < end && !vowels.contains(chars[start] + "")) {
                start++;
            }
            while (start < end && !vowels.contains(chars[end] + "")) {
                end--;
            }
            //exchange
            char temp = chars[start];
            chars[start] = chars[end];
            chars[end] = temp;
            //push to move on
            start++;
            end--;
        }
        
        //return
        return new String(chars);
    }
}

【missing number】短路了吧？
class Solution {
public int missingNumber(int[] nums) {
    
    //ini = sort
    Arrays.sort(nums);
    
    //cc
    if (nums[0] != 0) {
        return 0;
    }

    //for
    for (int i = 0; i < nums.length - 1; i++) {
    //notice
        if (nums[i + 1] != nums[i] + 1) {
            return nums[i] + 1;
        }
    }

    //return
    return nums.length;
}
}

【reverse string】
class Solution {
    public String reverseString(String s) {
        //corner case
        if (s == null) {
            return null;
        }
        int i = 0, j = s.length() - 1;
        //convert to char[]
        char[] chars = s.toCharArray();
        while (i < j) {
            char temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
            //notice here
            i++;
            j--;
        }
        //convert again
        return new String(chars);
        //return
    }
}

【方法2】
public class Solution {
    public String reverseString(String s) {
        return new StringBuilder(s).reverse().toString();
    }
}

【Valid Palindrome】
public class Solution {
    /**
     * @param s: A string
     * @return: Whether the string is a valid palindrome
     */
    public boolean isPalindrome(String s) {
        //cc
        if (s.isEmpty()) {
            return true;
        }
        
        //define
        int head = 0, tail = s.length() - 1;
        
        while (head < tail) {
            char cHead = s.charAt(head), cTail = s.charAt(tail);
            //judge:punction or not
            if (!Character.isLetterOrDigit(cHead)) {
                head++;
            }else if (!Character.isLetterOrDigit(cTail)) {
                tail--;
            }else {
                //tolowercase and judge
                if (Character.toLowerCase(cHead) != Character.toLowerCase(cTail)) {
                    return false;
                }
                //continue 
                head++;
                tail--;
            }
        }
    
        //return
        return true;
    }
    
【二分法解根号2】
class Solution {
    public int mySqrt(int x) {
        //bs
        long start = 1, end = x;
        while (start + 1 < end) {
            long mid = start + (end - start) / 2;
            if (mid * mid <= x) {
                start = mid;
            }else {
                end = mid;
            }
        }
        
        //return end or start
        if (end * end <= x) {
            return (int)end;
        }
        return (int)start;
}
}

【】

}

【斐波那契数列 recursion】
//Fibonacci Series using Recursion 
class fibonacci 
{ 
    static int fib(int n) 
    { 
    if (n <= 1) 
       return n; 
    return fib(n-1) + fib(n-2); 
    } 
       
    public static void main (String args[]) 
    { 
    int n = 9; 
    System.out.println(fib(n)); 
    } 
} 
Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential.

【Use Dynamic Programming】
// Fibonacci Series using Dynamic Programming 
class fibonacci 
{ 
   static int fib(int n) 
    { 
    /* Declare an array to store Fibonacci numbers. */
    int f[] = new int[n+2]; // 1 extra to handle case, n = 0 
    int i; 
       
    /* 0th and 1st number of the series are 0 and 1*/
    f[0] = 0; 
    f[1] = 1; 
      
    for (i = 2; i <= n; i++) 
    { 
       /* Add the previous 2 numbers in the series 
         and store it */
        f[i] = f[i-1] + f[i-2]; 
    } 
       
    return f[n]; 
    } 
       
    public static void main (String args[]) 
    { 
        int n = 9; 
        System.out.println(fib(n)); 
    } 
} 
//n n

【井字棋】
public class TicTacToe {
private int[] rows;
private int[] cols;
private int diagonal;
private int antiDiagonal;

/** Initialize your data structure here. */
public TicTacToe(int n) {
    rows = new int[n];
    cols = new int[n];
}

/** Player {player} makes a move at ({row}, {col}).
    @param row The row of the board.
    @param col The column of the board.
    @param player The player, can be either 1 or 2.
    @return The current winning condition, can be either:
            0: No one wins.
            1: Player 1 wins.
            2: Player 2 wins. */
public int move(int row, int col, int player) {
    int toAdd = player == 1 ? 1 : -1;
    
    rows[row] += toAdd;
    cols[col] += toAdd;
    if (row == col)
    {
        diagonal += toAdd;
    }
    
    if (col == (cols.length - row - 1))
    {
        antiDiagonal += toAdd;
    }
    
    int size = rows.length;
    if (Math.abs(rows[row]) == size ||
        Math.abs(cols[col]) == size ||
        Math.abs(diagonal) == size  ||
        Math.abs(antiDiagonal) == size)
    {
        return player;
    }
    
    return 0;
}
}

【happy number】
class Solution {
    public boolean isHappy(int n) {
        //cc
        if (n == 0) {
            return false;
        }
        
        //ini
        int squareSum, remain;
        Set set = new HashSet();
        
        //while loop, contains
        while (set.add(n)) {
            squareSum = 0;
            
            while (n > 0) {
                remain = n % 10;
                squareSum += remain * remain;
                n = n / 10;
            }
            
            if (squareSum == 1) return true;
            n = squareSum;
        }
        
        return false;
    }
}

【number permutation】
public class Solution {
    /*
     * @param nums: A list of integers.
     * @return: A list of permutations.
     */
    public List<List<Integer>> permute(int[] nums) {
        //corner case
        List<List<Integer>> results = new ArrayList<>();//
        List<Integer> permutations = new ArrayList<Integer>();
        HashSet<Integer> set = new HashSet<Integer>();
        
        if (nums == null) {
            return results;
        }
        if (nums.length == 0) {
            results.add(new ArrayList<Integer>());
            return results;
        }
        //helper
        helper(nums, permutations, set, results);
        return results;
    }
    
    //helper
    public void helper(int[] nums, List<Integer> permutations, HashSet<Integer> set, List<List<Integer>> results) {
        
        if (permutations.size() == nums.length) {//
                results.add(new ArrayList<Integer>(permutations));
                return ;
            }
            
        for (int i = 0; i < nums.length; i++) {
            if (set.contains(nums[i])) {
                continue;
            }
            
            permutations.add(nums[i]);
            set.add(nums[i]);
            helper(nums, permutations, set, results);
            set.remove(nums[i]);
            permutations.remove(permutations.size() - 1);
        }
    }
}

【search in 2 2D array】
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        
        if (matrix == null || matrix.length == 0) {
            return false;
        }
        if (matrix[0] == null || matrix[0].length == 0) {
            return false;
        }
        
        int m = matrix.length;
        int n = matrix[0].length;
        int x = m - 1;
        int y = 0;
        int count = 0;
        
        while (x >= 0 && y < n) {
            if (matrix[x][y] > target) {
                x--;
            }
            else if(matrix[x][y] < target) {
                y++;
            }
            else {
                count++;
                x--;
                y++;
            }
        }
         
        if (count > 0) {
            return true;
        }
        return false;
    }
}

【group anagrams】
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        //cc
        if (strs == null || strs.length == 0) return new ArrayList<List<String>>();
        
        //ini: map, char[]
        Map<String, List<String>> map = new HashMap<>();
        
        //for loop: add to char, to map
        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String anagram = String.valueOf(chars);
            if (!map.containsKey(anagram)) map.put(anagram, new ArrayList<String>());
            map.get(anagram).add(str);
        }
        
        //return (map)
        return new ArrayList<List<String>>(map.values());
    }
}

【find second maximum】
// JAVA Code for Find Second largest 
// element in an array 
class GFG { 
      
    /* Function to print the second largest 
    elements */
    public static void print2largest(int arr[],  
                                     int arr_size) 
    { 
        int i, first, second; 
       
        /* There should be atleast two elements */
        if (arr_size < 2) 
        { 
            System.out.print(" Invalid Input "); 
            return; 
        } 
       
        first = second = Integer.MIN_VALUE; 
        for (i = 0; i < arr_size ; i++) 
        { 
            /* If current element is smaller than  
            first then update both first and second */
            if (arr[i] > first) 
            { 
                second = first; 
                first = arr[i]; 
            } 
       
            /* If arr[i] is in between first and  
               second then update second  */
            else if (arr[i] > second && arr[i] != first) 
                second = arr[i]; 
        } 
          
        if (second == Integer.MIN_VALUE) 
             System.out.print("There is no second largest"+ 
                                 " element\n"); 
        else
             System.out.print("The second largest element"+ 
                                      " is "+ second); 
    } 
    

【Find All Duplicates in an Array】
class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        //initialization
        List<Integer> result = new ArrayList<Integer>();
        
        //for loop: get the new index, add to result if negative, change to negative
        for (int i = 0; i < nums.length; i++) {
            //get the new index
            int index = Math.abs(nums[i]) - 1;
            
            //add to result if negative
            if (nums[index] < 0) result.add(index + 1);
            
            //change to negative
            else nums[index] *= (-1);
        }
        //return
        return result;
    }
}
/*
                [4, 3, 2, 7, 8, 2, 3, 1]
            i    0  1  2  3  4  5  6  7
           index 3  2  1
nums[index]*(-1) -7 -2 -3
*/

【difference】
比较基础	递归	迭代
基本	函数体中的语句调用函数本身。	允许重复执行指令集。
格式	在递归函数中，仅指定终止条件（基本情况）。	迭代包括初始化，条件，循环内语句的执行以及控制变量的更新（递增和递减）。
终止	条件语句包含在函数体中，以强制函数返回而不执行递归调用。	重复执行迭代语句，直到达到某个条件。
条件	如果函数没有收敛到某个称为（基本情况）的条件，则会导致无限递归。	如果迭代语句中的控制条件永远不会变为false，则会导致无限次迭代。
无限重复	无限递归可能会导致系统崩溃。	无限循环重复使用CPU周期。
应用的	递归始终应用于函数。	迭代应用于迭代语句或“循环”。
堆	每次调用函数时，堆栈用于存储一组新的局部变量和参数。	不使用堆栈。
高架	递归拥有重复函数调用的开销。	没有重复函数调用的开销。
速度	执行缓慢。	快速执行。
代码大小	递归减少了代码的大小。	迭代使代码更长。
