def max(*nums)
    # we are giving minimum positive number to current_max
    # to compare with other integers.
    current_max = 0
    nums.each do |num|
        #current_max is 1 at first iteration
        #current_max is 2 at second iteration
        #current_max is 5 at third iteration
        #current_max is 5 at fourth iteration
        current_max = num if num > current_max
    end
    current_max
end    
# p max(1,2,5,3)

def own_reduce(array, initial)
    accumulator = initial
    for element in array
        accumulator = yield(accumulator, element)
    end
    accumulator
end

# p own_reduce([1,2,3,4,5],0) { |total, el| total+el }
# first iteration is 1
# second iteration is 3
# third iteration is 6
# fourth iteration is 10
# fifth iteration is 15
# return 15

def map_over_hashes(hash)
    new_array = []

    for key, value in hash
        new_array << yield(key,value)
    end
    return new_array
end

# p map_over_hashes({
#     name: "Cersei",
#     profession: "Queen",
#     mood:"bitter"
# }) { |key, value| "Her #{key.to_s} is #{value}"}

# p map_over_hashes({2 => 5, 10 => 2, 5 => 6}) { |key, value| key.to_s * value}

def get_user_info(first_name:"", last_name:"", city_of_birth:"")
    "{first_name: #{first_name}, last_name: #{last_name}, city_of_birth: #{city_of_birth}}"
end

#named arguments we need to specify the argument with ":"
#then write the string after ":"
#its required when you specify
# p get_user_info first_name:"Jon", last_name:"Snow", city_of_birth:"Winterfell"

def pluck(hashes, key)
    result = []
    for hash in hashes
        #{a:1}[a]
        result << hash[key]
    end
    result
end

p pluck([{a:1}, {a:"This is String value"}], :a)
