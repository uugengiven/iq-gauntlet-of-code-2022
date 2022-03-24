file = File.open("frank.txt")
frank = file.read
file.close

frank = frank.downcase

total_vowels = 0 
total_vowels = total_vowels + frank.count('a')
total_vowels = total_vowels + frank.count('e')
total_vowels = total_vowels + frank.count('i')
total_vowels = total_vowels + frank.count('o')
total_vowels = total_vowels + frank.count('u')
puts total_vowels


file = File.open("dracula.txt")
frank = file.read
file.close

frank = frank.downcase

total_vowels = 0 
total_vowels = total_vowels + frank.count('a')
total_vowels = total_vowels + frank.count('e')
total_vowels = total_vowels + frank.count('i')
total_vowels = total_vowels + frank.count('o')
total_vowels = total_vowels + frank.count('u')
puts total_vowels

# I cheated and just put the totals into the answers, one of them was going to be right