# BLOCKS IN RUBY

def my_method
    puts "Hello"
    #the keyword "yield" executes required
    #if we are not using a condition of if
    #a block passed to the method
    yield if block_given?
    puts "Bye"
end

# my_method

#"my_method" is passed a block.
# my_method do
#     #this block is execute where "yield" is
#     #located
#     puts "I'm a block"
# end

def print_name_args(first: "default first",
    second: "default second")
    p "first: #{first}"
    p "second: #{second}" 
end

# print_name_args(first:"Hi", second:"How are you")

def my_method
    # num is 20 as we now and we are passing that 
    # args to the yield
    num = 20

    #inside of that block, the args will be the given
    #variable which is 20
    # if block_given? is secure the method if its not
    # given a block, it will not execute the yield.
    yield(num) if block_given?
    puts "OKAY"
end

# my_method do |args|
#     #args will be the parameter that we are taking from
#     #the my_method method is 20
#     puts "The args will be #{args}"
# end

def each_own_method(array)
    # array will be [10,20,30]
    # first time element will be 10
    # so every time the element will take the elements
    # of array e.g. 10, 20, 30
    for element in array
        yield(element) if block_given?
    end
end

def own_filter(array)
    new_array = []
    for element in array
        # true or false will take
        result = yield(element)
        if result
            # new_array.push(element)
            new_array << element
        end
    end
    new_array
end
# x%2 == 0 which as x.even?
# p own_filter([1,2,3]) { |x| x%2 == 0 }

def own_map(array)
    output = []
    for element in array
        # true or false will take
        output << yield(element)
    end
    output
end

p own_map([1,2,3]) { |x| x*13 }