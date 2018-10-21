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
