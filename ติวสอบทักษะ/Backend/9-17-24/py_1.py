alice = [1,2,3]
bob = [4,5,6]

alice_score = 0
bob_score = 0

for i in range(len(alice)) :
  if alice[i] < bob[i]:
    bob_score+=1
  elif alice[i] > bob[i]:
    alice_score+=1

print ("alice score = " , alice_score , "bob score = " , bob_score)