# Ex.13 This time inside a function named name_adder, write a while loop that stops 
# appending items to the new_list as soon as it encounters an empty string: "".
# Make sure the function returns the list variable new_list.
# So while the previous exercise catches names even after the empty string, 
# this one aims to stop as soon as empty string is encountered."

=["Sam", "Luke", "", "Ben", "Olivia", "Alicia"]


// Ex. 21 create a list where each element is doubled if negative 
// And tripled if positive
numbers = [2, -1, 79, 33, -45]


# Write a function called common_letters that takes two arguments, string_one
# and string_two and then returns a list with all of the letters they have in common.
# The letters in the returned list should be unique. For example, 
def common_letters(string_one, string_two):
  common = []
  for character in string_one:
    if (character in string_two) and not (character in common):
      common.append(character)
  return common
  
# print(common_letters("banana", "creamn"))


def username_generator(first_name, last_name):
  if len(first_name) < 3:
    user_name = first_name
  else:
    user_name = first_name[0:3]

  if len(last_name) < 4:
    user_name += last_name
  else:
    user_name += last_name[0:4]
    return user_name
# print(username_generator("Abe", "Simpson"))

def password_generator(user_name):
  password = ""
  for letter in range(0, len(user_name)):
    password = password + user_name[letter-1]
  return password
# print(password_generator("AbeSimp")) 

# name_zip = ["AbeSimp","agatha","cat","ant"]




========================================================================================

# 3.Copeland’s Corporate Company has finalized what they want their username 
# and temporary password creation to be and have enlisted your help, once again, 
# to build the function to generate them. In this exercise, you will create two 
# functions, username_generator and password_generator. Let’s start with 
# username_generator. Create a function called username_generator take two inputs, 
# first_name and last_name and returns a user_name. The username should be a slice 
# of the first three letters of their first name and the first four letters of their 
# last name. If their first name is less than three letters or their last name is less 
# than four letters it should use their entire names.For example, if the employee’s 
# name is Abe Simpson the function should generate the username AbeSimp.

def username_generator(first_name, last_name):
    if len(first_name) < 3:
        return first_name
    else:
        user_name = first_name[0:3]
    
    if len(last_name) < 4:
        return last_name
    else:
         user_name = user_name + last_name[0:4]
         return user_name

user_name =username_generator("Abe", "Simpson")
print(user_name)



==========================================================================================
# 3.Copeland’s Corporate Company has finalized what they want their username and 
# temporary password creation to be and have enlisted your help.

# a) For example, if the employee’s name is Abe Simpson the function should generate 
# the username AbeSimp.

# b) For example, if the username is AbeSimp, then the temporary password 
# generated should be "pAbeSim".

# c) The username should be a slice of the first three letters of their first name 
# and the first four letters of their last name. 

# 1. Lisa Marie
# 2. Damilola Durojayie
# 3. Ayo Balogun
# 4. Andrew Brown
# 5. Michael Adjetey
# 6. Yaw Nyamekye
# Stephen Okain
# Francis Agyavor
# Edem Amevi
# Martey Johnson
# Andy Nyamekye
# Nicholas Kwarteng
# Nikaka Antoine

def username_generator_1(first_name, last_name):
    if len(first_name) < 3:
        return first_name
    else:
        user_name = first_name[0:3]
    
    if len(last_name) < 4:
        return last_name
    else:
        user_name = user_name + last_name[0:4]
        return user_name

create_new_user = username_generator_1("Lisa","Marie")
# print(create_new_user)

user_name = "LesMari"
def password_generator_1(user_name):

    password = ""
    for item in range(0, len(user_name)):
        password_1 = user_name[item] # prints "i"
        password_2 = password_1[0:item-1]
        # password_3 = password_1 + password_2
    return password_2
new_password = password_generator_1(user_name)
print(new_password)



    

