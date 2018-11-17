class Present
    # ==================================================
    #                      SET UP
    # ==================================================

    # add attribute readers for instance access
    attr_reader :id, :name, :image, :price, :bought_status

    # connect to postgres
    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'ChristmasWishList_development')
    end
    #the rest of your code goes here...

    # initialize options hash
    def initialize(opts = {}, id = nil)
        @id = id.to_i
        @name = opts["name"]
        @image = opts["image"]
        @price = opts["price"]
        @bought_status = opts["bought_status"]
    end



    # ==================================================
    #                      ROUTES
    # ==================================================

    # get all
    def self.all
      results = DB.exec(
          <<-SQL
              SELECT *
              FROM presents
          SQL
      )
      return results.map do |result|
        present = Present.new(result, result["id"])
        end
    end

    # get one by id
    def self.find(id)
        result = DB.exec("find_present", [id]).first
        p result
        if result
          return present = Present.new(result, result["id"])
        else
          return {message: "sorry no present found at this id: #{id}", status: 400}
        end
    end

    # create one
    def self.create(opts={})
      results = DB.exec("create_present", [opts["name"], opts["image"], opts["price"], opts["bought_status"]])
      return Present.new(results.first, results.first["id"])
    end

    # delete one (by id)
    def self.delete(id)
      results = DB.exec("delete_present", [id])
      p 'this is the result'
      p results
      if results.first
        return { deleted: true }
      else
        return { message: "sorry cannot find present at id: #{id}", status: 400}
      end
    end

    # update one (by id)
    def self.update(id, opts={})
      results = DB.exec("update_present",
        [
          id, opts["name"], opts["image"], opts["price"], opts["bought_status"]
        ]
      )
      if results.first
        return Present.new(results.first, results.first["id"])
      else
        return { message: "sorry cannot find present at id: #{id}", status: 400}
      end
    end

end
