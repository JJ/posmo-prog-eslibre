#!/usr/bin/env julia

# Run with julia -4 or the number of processors you need

using Distributed

global iterations = 100000
global top_length = 32768

# Create a random chromosome
function random_chromosome(length)
    chromosome = Bool[]
    for i in 1:1:length
        if ( rand(0:1) > 0.5 )
      	    push!(chromosome,true)
        else
	    push!(chromosome,false)
        end
    end
    chromosome
end

# Mutate and compute time
function time_mutations(number,length)
    inicioTiempo = time()

    fitness = @distributed for i in 0:1:number
        indi = random_chromosome(length)
        reduce( +, indi)
    end
    println(fitness)
    time()-inicioTiempo

end

function run_onemax() 
    length = 256
    while length <= top_length
        println("julia-Onemax-distributed, " * string(length) * ", " * string(time_mutations( iterations,length )))
        length *= 2
    end
end

run_onemax()
