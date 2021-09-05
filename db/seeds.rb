def destroy_all
  puts 'Destroying all data... 💥'
  User.destroy_all
end

def create_user
  used_emails = []
  uniq_email = lambda {
    email = Faker::Internet.email
    email = Faker::Internet.email while used_emails.include?(email)
    used_emails << email
    email
  }
  10.times do
    user = User.create!(email: uniq_email.call, password: 'password')
    puts 'New user created:'
    p user
  end
end

destroy_all
create_user
