my_lambda = lambda { puts "I am a lambda"; return }
stabby_lambda = -> { puts "I am a lambda"; return }
my_proc = proc { puts "I am a proc"; return }

# the syntax is when you calling the lambda or procs 
# you should use .call method
# my_lambda.call
# stabby_lambda.call
# my_proc.call


# lambda defination with arguments
lambda_multiply = lambda { |a, b| puts "Total #{a * b}" }

# we can call the lambda, with or without 
# brackets as we are passing args
# lambda_multiply.call 3, 5

def my_method(code)
    puts "--- #{code.class} ---"
    puts "Hey"
    code.call
    puts "Hello"
end

# my_method(my_lambda)
# my_method(my_proc)

# def proc_message
#     return "message"
#     return "Bye"
# end

def proc_test
    example = Proc.new { return "Hi Proc"}
    example.call
    return "Bye Proc"
end

# As we know a regular methods if they have a return 
# it will exit the method.
# def message
#     return "message"
# end

# def lambda_message
#     message
#     return "Bye"
# end

def lambda_test
    example = lambda { return "Hi Lambda"}
    example.call
    return "Bye Lambda"
end


p proc_test
p lambda_test
