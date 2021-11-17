# def keyword "define" for creating or
# defineding a method
# A method we can create with or without
# any parameters
# name should be snake_case
def say_hello
    p "Hello"
end

# 2 way to define a method with parameters
# with brackets or without brackets
# brackets are optional
def say_hello_with_params name
    p name
end

# say_hello
# say_hello_with_params("CodeCore")
# last line implicitly returns with a method.
def multiply a, b
    return a
    a * b
end

# p multiply(2, 3)
# p multiply 2, 3

def by_five?(num)
    # returning is implicit
    # num % 5 == 0
    (num % 5).eql? 0
    # == for if conditions
    # === for case equality
    # .eql? -> synonymously with ==
    # .equal? -> cheking two operants 
    # refer to the same object``
end

# p by_five?(6)
# p by_five?(5)

def what_is_it(obj)
    if [String, Array, Integer].include? (obj.class)
        #to_s => parsing to String ""
        obj.class.to_s
    else
        "Something Else"
    end
end
#wrong number of arguments (given 0, expected 1) (ArgumentError)
# p what_is_it()
# p what_is_it 5
# p what_is_it []

# p what_is_it 5.4

# default arguments for b, if
# we are calling the method with 1 
# parameter, its not give us an error
def default_multiply(a, b = 3)
    a * b
end
# p default_multiply(1)
# p default_multiply(1, 5)

#===VARIADIC METHODS
# (*) splat in JS is (...)

def my_args(first, *args, last)
    p "first: #{first}"
    p "args: #{args}"
    p "last: #{last}"
end

# my_args(1,2,3,4,5,6,7,8)

def product_single_args(*nums)
    # nums => [1,2,3,4]
    # reduce, foreach, map is 
    # higher order methods of "ARRAY"
    # nums.foreach
    # nums.map

    nums.reduce do |acc, current_value|
        p "acc: #{acc}"
        p "current_value: #{current_value}"
        acc * current_value
    end
end

# p product(1,2,3,4)

def product(first, *nums)
    result = first
    # p "first: #{first}"
    # p "nums: #{nums}"
    nums.each {|num| result *= num}
    result
end     

# p product(1,2,3,4)

def find_min (*nums)
	nums.reduce do |acc, current_value|
		if acc > current_value
		else	
			acc
		end 
    end
end

# p find_min(100,2,3,4)

def find_min (*nums)
    current_min = Float::INFINITY
    nums.each do |num|
        current_min = num if num < current_min
    end
    current_min
end

# p find_min(100,2,3,4)
