public class Main {
  public static void main(String[] args) {
    int[] alice = {1,2,3};
    int[] bob = {2,3,4};

    int aliceScore = 0;
    int bobScore = 0;

    for (int i = 0; i < alice.length; i++) {
      if (alice[i] > bob[i]) {
        aliceScore++;
      } else if (alice[i] < bob[i]) {
        bobScore++;
      }
    }

    System.out.printf("aliceScore = %d, bobScore = %d\n", aliceScore, bobScore);
  }
}