def case_value(str)
    #switch - case in JS
    case str
    when "English"
        puts "Hello"
    when "French"
        puts "Bonjour"
    when "Turkish"
        puts "Selam"
    else
        puts "What was that?"
    end
end

case_value("English")