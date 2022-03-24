file = File.open('data.txt')

length = 0
file_data = file.readlines.each do |data|
    data = data.chomp
    data.each_char do |char |
        length = length + char.ord
    end
end

puts length