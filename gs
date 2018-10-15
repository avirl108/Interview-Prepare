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


