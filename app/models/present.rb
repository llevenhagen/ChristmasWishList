class Present
    # ==================================================
    #                      SET UP
    # ==================================================

    # connect to postgres
    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'ChristmasWishList_development')
    end
    #the rest of your code goes here...





    # ==================================================
    #                      ROUTES
    # ==================================================

    # get all

   def self.all
         results = DB.exec("SELECT * FROM presents;")
         return results.map do |result|
             {
                 "id" => result["id"].to_i,
                 "name" => result["name"],
                 "image" => result["image"],
                 "price" => result["price"],
                 "bought_status" => result["bought_status"]
             }
         end
   end

    # get one by id
    def self.find(id)
    results = DB.exec("SELECT * FROM presents WHERE id=#{id};")
    return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "image" => results.first["image"],
        "price" => results.first["price"],
        "bought_status" => results.first["bought_status"]
    }
  end

    # create one
      def self.create(opts)
        results = DB.exec(
     <<-SQL
         INSERT INTO presents (name, image, price, bought_status)
         VALUES ( '#{opts["name"]}', '#{opts["image"]}', '#{opts["price"]}', #{opts["bought_status"]} )
         RETURNING id, name, image, price, bought_status;
     SQL
 )
 return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "image" => results.first["image"],
        "price" => results.first["price"],
        "bought_status" => results.first["bought_status"]
    }
    end

    # delete one (by id)
    def self.delete(id)
      results = DB.exec("DELETE FROM presents WHERE id=#{id};")
      return { "deleted" => true }
    end


    # update one (by id)
    def self.update(id, opts)
      results = DB.exec(
          <<-SQL
              UPDATE presents
              SET name='#{opts["name"]}', image='#{opts["image"]}', price='#{opts["price"]}', bought_status='#{opts["bought_status"]}
              WHERE id=#{id}
              RETURNING id, name, image, price, bought_status;
          SQL
      )
      return {
          "id" => results.first["id"].to_i,
          "name" => results.first["name"],
          "image" => results.first["image"],
          "price" => results.first["price"],
          "bought_status" => results.first["bought_status"]
      }
   end
end
