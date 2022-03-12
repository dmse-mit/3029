start=$1;
end=$2;

for size in {25..75..10}
do
	echo "Running Simulations for box size: $size"
	for ((seed=$start; seed<=$end; seed++))
	do
		echo "-- seed: $seed"
		./step-growth-polymerization-script.wls $size $seed
	done
done
