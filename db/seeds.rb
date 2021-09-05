def destroy_all
  puts 'Destroying all data... 💥'
  User.destroy_all
end

def create_users
  User.create!(email: 'admin@maps.com', password: '123123')
  used_emails = []
  uniq_email = lambda {
    email = Faker::Internet.email
    email = Faker::Internet.email while used_emails.include?(email)
    used_emails << email
    email
  }
  10.times do
    user = User.create!(email: uniq_email.call, password: '123123')
    puts '✨New user created:'
    p user
  end
end

def create_maps
  map_styles = %w[style1 style2 style3 style4]

  User.all.each do |user|
    (1..3).to_a.sample.times do
      map = Map.create!(
        user: user,
        map_style: map_styles.sample,
        name: Faker::Book.title,
        lat: (rand.round(5) * (-89..90).to_a.sample).to_s,
        lon: (rand.round(5) * (-179..180).to_a.sample).to_s
      )
      puts '✨New map created: '
      p map
    end
  end
end

destroy_all
create_users
create_maps
