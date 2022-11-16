/**
 * Link:https://www.scaler.com/academy/mentee-dashboard/class/29455/homework/problems/4033/hints?navref=cl_pb_nv_tb
Solution:
First, we will find the number of elements that are less than or equal to B. Let the count comes out to be X.

We know that we need at most X-1 swaps to make all X elements to be consecutive.
Maintain a window of X and check how many elements we need to swap so that all X elements come in that window.

We store the minimum of all that and return that.
 */

module.exports = {
    solve: function (A, B) {
        let n = A.length;
        let cnt = 0;
        // count number of elements <= B
        A.forEach((x) => {
          cnt += x <= B;
        });
        if (cnt <= 1) return 0;
        else {
            let l = 0, r = 0, x = 0;
            // find the number of swaps required for each window of size cnt
            while (r < cnt) {
                if (A[r] > B) 
                    x++;
                r++;
            }
            let ans = x;
            while (r < n) {
                if (A[r] > B) 
                    x++;
                if (A[l] > B) 
                    x--;
                ans = Math.min(ans, x);
                r++;
                l++;
            }
            return ans;
        }
    },
};